import { posts } from '../../data/posts';

export default (req, res) => {
  const pageSize = 10;
  
  const page = req.query.page ? Number.parseInt(req.query.page) : 1;

  const totalPages = Math.ceil(posts.length / pageSize);

  const data = posts.slice(pageSize * (page - 1), page * pageSize);
  const info = { 
    next: page >= totalPages ? null : page + 1,
    prev: page <= totalPages ? page - 1 : null 
  }

  res.json({ results: data, info });
}