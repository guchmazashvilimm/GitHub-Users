import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const DisplayTable=({data,repositories})=>{
    return (
        <>
        <div className='table'>
        <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Email</th>
          <th>Repositories</th>
          <th>Followers</th>
          <th>Following</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.login}</td>
          <td>{!data.avatar_url ? " ":
          (<img className='rounded-circle user-img' src={data.avatar_url}></img>) }</td>
          <td>{data.location}</td>
          <td>{data.bio}</td>
          <td>{data.Email}</td>
          <td>{repositories.map(repo => (
            <div className='text-white'>
                <div className='item'>
                    <div className='content'>
                        <a href={repo.html_url} 
                        className='header text-white'
                         target="_blank">
                            {repo.name}
                         </a>
                    </div>
                </div>
            </div>
          ) )}</td>
          <td>{data.followers}</td>
          <td>{data.following}</td>
        </tr>
      </tbody>
    </Table>
        </div>

        </>
    )
}
export default DisplayTable;
