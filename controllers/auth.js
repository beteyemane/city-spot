const User = require('../models/user')
const jwt = require('jsonwebtoken')

function registerRoute( req, res, next ) {
  User.create(req.body)
    .then(() => res.status(201).json({ message: 'Registration completed' }))
    .catch(next)
}

function loginRoute( req, res, next ) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(res.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '12h' })

      res.json({
        token,
        message: `Welcome back ${user.username}!`

      })
    })

    .catch(next)
}


module.exports = {
  register: registerRoute,
  login: loginRoute
}
