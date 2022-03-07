import { enumType, extendType, nonNull, objectType, stringArg } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('email');
    t.string('pubAddrs');
    t.string('image');
    t.field('role', { type: Role });
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
            pubAddrs: '0xF3B4f467CdB68C56041b840683c5C2AFD87F2726',
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
