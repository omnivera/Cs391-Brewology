
import '../App.css';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';


const Tablecoffe = (props) => {
    const {list, onDelete} =props;
    return <div>

<div className='tablecont'>
   
   <Table  bordered hover variant="light">
     <thead>
       <tr>
         <th>#</th>
         <th>Product Name</th>
         <th>Small</th>
         <th>Medium</th>
         <th>Large</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
     {list.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><button onClick={() => {onDelete(item.id);}}>
                                        <i>Delete</i>
                                    </button></td>                              
                                    </tr>
                            );
                        })}
   
    
   
     
     
     </tbody>
   </Table>
   </div>
        
  


    </div>
}

export default Tablecoffe;