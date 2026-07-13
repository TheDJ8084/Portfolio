import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    about: singleton({
      label: 'About Me',
      path: 'src/content/about/about',
      format: { contentField: 'content' },
      schema: {
        headline: fields.text({ label: 'Headline' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        image: fields.image({
          label: 'Profile Image',
          directory: 'src/assets/images/about',
          publicPath: '../../assets/images/about/'
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' }, // Automatically stores as .mdoc with frontmatter
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        startDate: fields.date({ label: 'Start Date' }),
        endDate: fields.date({ label: 'End Date', description: 'Leave empty if ongoing' }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.image({
          label: 'Hero Image',
          directory: 'src/assets/images/projects',
          publicPath: '../../assets/images/projects/'
        }),
        gallery: fields.array(
          fields.image({
            label: 'Gallery Image',
            directory: 'src/assets/images/projects/gallery',
            publicPath: '../../assets/images/projects/gallery/'
          }),
          { label: 'Image Gallery', itemLabel: props => props.value ? 'Image' : 'Empty Image' }
        ),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
