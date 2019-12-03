import User from '../models/User';

module.exports = {
  async store(req, res) {
    const { name, lastname, email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, lastname, email, password });
    }

    return res.json(user);
  },
};
