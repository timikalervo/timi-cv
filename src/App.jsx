// Adding routing at some point?
//import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <img 
          src="timi-cv/Edustavakuva.JPEG" 
          class="picofme"
          alt="Picture of me" 
          height={250}
          />
      </div>
      <h1>Timi Autio CV</h1>
      <div className="card">
        <p>
          Hi! This is my personal CV which I made with React, Vite and CSS. My plan is
          to update and add more features to this web page as a nice little side project.
        </p>
      </div>

      <h2>About me</h2>
      <div className="card">
        <p>
        My name is Timi, a Computer Science student from Tampere University. In the
        future I plan to be a top professional in the field of software development.
        My passion is learning new things and solving complex problems. Even in my
        free time I usually find myself reading articles about emerging technologies.
        I have work experience both in technology sales and industrial roles.
        People often describe me as an honest and sociable person. To balance my 
        studies, I enjoy doing sports and spending time with my friends.
        </p>
      </div>

      <h2>Education</h2>
      <div className="card">
        <h3>Tampere University 2023-</h3>
          <p>Computer Science</p>
      </div>

      <h2>My work experience</h2>
      <div className='card'>
        <div className='jobcard'>
          <h3>Gigantti Oy Ab</h3>
          <p>Jan 2023 - Jun 2023</p>
          <p>Sales (Tech and Home)</p>
        </div>

        <div className='jobcard'>
          <h3>Elisa Oyj</h3>
          <p>Jul 2022 - Nov 2022</p>
          <p>Sales and customer service in a Elisa store</p>
        </div>

        <div className='jobcard'>
          <h3>Valokuitunen Oy Aug 2021 - Jan 2022</h3>
          <p>Aug 2021 - Jan 2022</p>
          <p>B2B sales. Sold fiber connections to small housing companies. </p>
        </div>
      </div>

      <h2>Key words</h2>
      <div className="card">
          <p>
            Computer Science, Datastructures and algorithms, Software Engineering,
            Usability, Web development, Embedded Software Development, Teamwork.
          </p>
          <p>
            C++, C, Java, Python, JavaScript, NodeJS, React, Redux, SQLite, CSS,
            Git.
          </p>
      </div>

      <p> Connect with me on: <br />
        <a 
          href="https://linkedin.com/in/timi-autio" 
          target="_blank" 
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>

      <p>
        <a 
          href="https://github.com/timikalervo" 
          target="_blank" 
          rel="noopener noreferrer">
          GitHub
        </a>
      </p>

      <p className="thankyoutext">
        Thank you for making it here!:)
      </p>
    </>
  )
}

export default App
