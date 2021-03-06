exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'My POST Request', content: 'This is Bibhu post!' }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
 
  res.status(201).json({
    message: 'Bibhu Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
