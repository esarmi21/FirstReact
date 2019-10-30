import React from 'react';
import logo from './logo.svg';
import './App.css';


function WorkHistory(){
      return(
        <div>
        <h2> Work History</h2>
	<ul>
		<li>Wash Dogs Inc</li>
		<p><i>2011-2015</i><br/><strong> Assurance Lead</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eu quam suscipit 
    sagittis sit amet nec augue. Morbi congue consectetur mi. Proin eget viverra lorem. Cras nibh eros, vehicula nec velit et, faucibus ornare ipsum.
    Sed tincidunt felis in dictum auctor. Sed congue consequat mi, quis consequat augue tristique sed.</p>
    <li>Dog Painter</li>
    <p><i>2015-current</i><br/><strong>Freelance</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae 
    velit eu quam suscipit sagittis sit amet nec augue. Morbi congue consectetur mi. Proin eget viverra lorem. Cras nibh eros, vehicula 
    nec velit et, faucibus ornare ipsum. Sed tincidunt felis in dictum auctor. Sed congue consequat mi, quis consequat augue tristique sed.</p>
    </ul>
    </div>
      )

}

function App() {
  return (
  <div>
	<h1> Sally Student Resume
	</h1>
  <section>
	<p> Hi my name is Sally Student. I'm an aspiring full stack web developer. I love dogs and cats mostly dogs well yea I like
		cats too.</p>
  </section>
	<h2>Skills</h2>
	<ul>
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
		<li>jQuery</li>
	</ul>
	<h2>Education</h2>
	<ul>
		<li> Good Boy university</li>
		<li> How to not be a bad boy Trade school</li>
	</ul>
	
  <WorkHistory />

	<h2>Contact Info</h2>
	<p>Twitter: <a href="https://twitter.com/kuuros_" Target="_blank">@Kuuros_</a></p>
  <p>Phone number: 180042069</p>
  <p><a href="mailto:esarmi21@gmail.com" target="_top">sallystudent@gooddoggo.com</a></p>
	<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNUAQRJjqEt5QRTYARhQu4B1BhF4V5WjmaJL7RuBCkVV_F2Ze" alt="a really cool doggo"/></p>

  <section>
    written by <a href="mailto:esarmi21@gmail.com">Jay Sarmiento</a><br/>
    Thinkful.com
  </section>
    
  </div>
  );
}

export default App;
