import { objectType, extendType, nonNull, stringArg } from 'nexus';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('url');
    t.string('description');
    t.string('imageUrl');
    t.string('category');
  },
});

// get Unique Link
export const LinkByIDQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('link', {
      type: 'Link',
      args: { id: nonNull(stringArg()) },
      resolve(_parent, args, ctx) {
        const link = ctx.prisma.link.findUnique({
          where: {
            id: args.id,
          },
        });
        return link;
      },
    });
  },
});

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('links', {
      type: 'Link',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.link.findMany();
      },
    });
  },
});
