const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const Template = path.resolve(`src/helpers/WpPost.js`)
  const {createPage} = actions
  const post  = await graphql(`
    {
      allWpPost {
          nodes {
            slug
            id
            title
            date(fromNow: true)
            authorId
            desiredSlug
            dateGmt
            content
            link
            commentCount
            featuredImageDatabaseId
            featuredImage {
              node {
                srcSet
              }
            }
          }
      }
    }
  `)
.then((resultPost) => {
    if (resultPost.errors) {
      Promise.reject(resultPost.errors)
    }
  resultPost.data. allWpPost.nodes.forEach((k, id) => {
    createPage ({
      // path: `/post/${id+1}`,
      path: `/post/${k.title}`,
      component: Template,
      context: {
        // title: k.title,
        // id:id,
      k:k,
      }
    })
  })
})

return Promise.all([ post])

  }