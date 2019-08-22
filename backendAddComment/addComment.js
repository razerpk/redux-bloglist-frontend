/**
 * This file contains only the POST call function
 * that is needed when adding an comment.
 * This file isnt used anywhere.
 */


// POST
blogRouter.post('/:id/comments', async (request, response, next) => {
  const body = request.body

  try {
    const blog = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      comments: body.comments
    }

    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.json(updatedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})