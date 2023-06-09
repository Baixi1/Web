import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto col-sm-9 offset-sm-1 col-md-7 offset-md-2 col-lg-5 offset-lg-3">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
      <h2 className="text-center mb-5 fw-light fs-5">Contact</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </div>
          </div>
        </div>
        <div className='a' style={{marginBottom: '540px'}}></div>
      </div>
  )
}
export default ContactForm