import User from '../models/User';

module.exports = {
  async store(req, res) {
    const { name, lastname, email, password } = req.body;

    const user = await User.create({ name, lastname, email, password });

    return res.json(user);
  },
};
