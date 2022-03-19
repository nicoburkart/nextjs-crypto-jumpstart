import { enumType, extendType, nonNull, objectType, stringArg } from 'nexus';
import {
  generateToken,
  publicAddressIsValid as isOwnerOfAddress,
} from '../../lib/jsonWebToken';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('name');
    t.int('nonce');
    t.string('email');
    t.string('pubAddrs');
    t.string('image');
    t.field('role', { type: Role });
  },
});

export const Session = objectType({
  name: 'Session',
  definition(t) {
    t.string('token');
    t.int('nonce');
  },
});

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
});

export const UserByPubAddrsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: 'User',
      args: { pubAddrs: nonNull(stringArg()) },
      resolve(_parent, args, ctx) {
        const user = ctx.prisma.user.findFirst({
          where: {
            pubAddrs: args.pubAddrs,
          },
        });
        return user;
      },
    });
  },
});

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});

export const CreateUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: User,
      args: {
        pubAddrs: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const newUser = {
          name: args.pubAddrs.substring(0, 5),
          nonce: Math.floor(Math.random() * 1000000),
          pubAddrs: args.pubAddrs,
        };

        return await ctx.prisma.user.create({
          data: newUser,
        });
      },
    });
  },
});

export const AuthenticateUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('session', {
      type: Session,
      args: {
        pubAddrs: nonNull(stringArg()),
        signature: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const user = ctx.prisma.user.findFirst({
          where: {
            pubAddrs: args.pubAddrs,
          },
        });
        const authNonce = (await user).nonce;

        //check signedNonce of user and generate token
        const msg = `Please sign this number to login: ${authNonce}`;
        if (!isOwnerOfAddress(args.pubAddrs, msg, args.signature)) {
          throw new Error(`Signature invalid`);
        }

        const token = generateToken(args.pubAddrs);

        //update user nonce
        await ctx.prisma.user.update({
          where: {
            pubAddrs: args.pubAddrs,
          },
          data: {
            nonce: Math.floor(Math.random() * 1000000),
          },
        });
        return { token: token, nonce: authNonce };
      },
    });
  },
});

export const UpdateUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('updateUser', {
      type: User,
      args: {
        name: stringArg(),
        email: stringArg(),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.userPub) {
          throw new Error(`You do not have permission to perform this action`);
        }

        let update;
        if (args.name && args.email) {
          update = {
            name: args.name,
            email: args.email,
          };
        } else if (args.name) {
          update = {
            name: args.name,
          };
        } else if (args.email) {
          update = {
            email: args.name,
          };
        } else {
          throw new Error(`Missing arguments to update`);
        }

        return await ctx.prisma.user.update({
          where: {
            pubAddrs: ctx.userPub,
          },
          data: update,
        });
      },
    });
  },
});
