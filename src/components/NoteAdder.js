import React from 'react'
import UserContext from './UserContext'



class NoteAdder extends React.Component {
  static contextType = UserContext;
  
    render() {
        console.log(this.context);
        const folderOptions= [];
        this.context.folders.forEach(
            folder=>folderOptions.push(<option value={folder.id}>{folder.name}</option>)
        )
        return (
        <form>
            <h3>Add New Note</h3>
            <label>Name</label>
            <input type= 'text' name='newNoteName' ></input>
            <label>folder</label>
            <select name= 'folderSelect'>{folderOptions}              
            </select>
            <label>content</label>
            <input type='textarea' name='content'></input>
            <button type='submit'>Add</button>        
           
        </form>
    )
}
   }
    


export default NoteAdder;
