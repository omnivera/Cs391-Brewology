
import '../App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
const Tablecoffe = (props) => {
    const {list, onDelete} =props;
    return <div>

<div className='tablecont'>
   
   <Table  bordered hover variant="light">
     <thead>
       <tr>
         <th>Id</th>
         <th>Quantity</th>
         <th>Coffee Name</th>
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
                                    <td>{item.id}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.productname}</td>
                                    <td>{item.small}</td>
                                    <td>{item.medium}</td>
                                    <td>{item.large}</td>
                                    <td><Button className='del-btn' variant='outline-danger' onClick={() => {onDelete(item.id) ;}}>
                                        <i class="fa fa-trash"></i>
                                    </Button></td>                              
                                    </tr>
                            );
                        })}
   
    
   
     
     
     </tbody>
   </Table>
   </div>
        
  


    </div>
}

export default Tablecoffe;