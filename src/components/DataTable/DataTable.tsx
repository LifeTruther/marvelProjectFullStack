import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowModel } from '@material-ui/data-grid';
import { server_calls } from '../../api'; 
import { useGetData } from '../../custom-hooks'; 
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; 
import { HeroForm } from '../../components/HeroForm'; 
  
  

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'comics_appeared_in', headerName: 'Comics Appeared in', type: 'number', width: 250 },
    { field: 'super_power', headerName: 'Super Power', width: 250 },
  ];

  interface gridData{
    id?:string;
  }

export const DataTable = () => {

  let { heroData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({id:''})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
    getData()
  }

  let handleCheckbox = (id:GridRowModel) =>{
    if(id[0] === undefined){
      setData({id:''})
    }else{
      setData({id:id[0].toString()})
    }
  }

  let deleteData = () => {
    server_calls.delete(gridData.id!)
    getData()
  }


  return (
    <div style={{ 
      height: '23.5rem', 
      width: '80%', 
      marginLeft: '10%',
      }}>
        <h2>Heroes In Inventory</h2>
        <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange = {handleCheckbox}/>
        <Button onClick={handleOpen} >Update</Button>
        <Button variant="contained" style={{margin: '2rem'}} color="secondary" onClick={deleteData}>Delete</Button>
          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Drone</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Drone</DialogContentText>
              <HeroForm id={gridData.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="default">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
    
    </div>
    );
}