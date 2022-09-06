import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Student() {
  return (
    <div>
    <Navbar/>
    <div className='header'>
    <h3>Student Page</h3>

    <button type="button" class="btn btn-secondary">Add Students</button>
    </div>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>24</td>
      <td>MERN</td>
      <td>October</td>
      <td><Link to="/">Edit</Link></td>
    </tr>
    <tr>
    <td>Petter</td>
    <td>23</td>
    <td>MERN</td>
    <td>March</td>
    <td><Link to="/">Edit</Link></td>
    </tr>
    <tr>
    <td>Sonu</td>
    <td>24</td>
    <td>MERN</td>
    <td>October</td>
    <td><Link to="/">Edit</Link></td>
    </tr>
    <tr>
    <td>Sarayu</td>
    <td>22</td>
    <td>MERN</td>
    <td>May</td>
    <td><Link to="/">Edit</Link></td>
    </tr>
    <tr>
    <td>Balu</td>
    <td>24</td>
    <td>MERN</td>
    <td>December</td>
    <td><Link to="/">Edit</Link></td>
    </tr>
  </tbody>
</table>

    
    </div>
  )
}

export default Student;