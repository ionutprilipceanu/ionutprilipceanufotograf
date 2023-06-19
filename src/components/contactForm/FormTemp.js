import React, { useState } from "react"
import Button from "react-bootstrap/Button"

const FormTemp = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="sections">
          <div className="form-group">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Telefon:</label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="eventName">Tip eveniment:</label>
              <input type="text" name="eventName" id="eventName" />
            </div>
            <div>
              <label htmlFor="phone">Data:</label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-input"
                selected={startDate}
                onChange={date => setStartDate(date)}
                format="DD/MM/YY"
              />
            </div>
            <div>
              <label htmlFor="city">Oraș:</label>
              <input type="city" name="city" id="city" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comment:</label>
          <br />
          <textarea name="comments" id="comments"></textarea>
          <Button type="submit" variant="dark">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormTemp
