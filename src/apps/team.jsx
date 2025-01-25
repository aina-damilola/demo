import "../styles/team.css"

import { ReactComponent as Empty_Folder } from "../assets/folder-without-files.svg";
import { ReactComponent as Full_Folder } from "../assets/folder-with-files.svg";
/*
function FolderState() {
  const [fileOpen, setFileOpen] = useState(false); 

  const handleFolderClick = () => {
    setFileOpen(!fileOpen); // Toggle the file stusat

    var folderVar = document.getElementById("folder");
    if(!fileOpen){
        folderVar.style.width = '40%';
        // folderVar.style.color = 'yellow';  
        folderVar.style.marginLeft = '5%';
        folderVar.style.marginRight = 'auto';
        folderVar.style.marginTop = '0';
        
    }
    else{
        folderVar.style.width = '50%';
        // folderVar.style.color = 'green';
        folderVar.style.margin = 'auto'
    }
  };

  return (
    <div id="folder" onClick={handleFolderClick}>
      {fileOpen ? <Empty_Folder_rev /> : <Full_Folder />}
    </div>
  );
}
*/
function Team({section3Ref}){
    return(
        <div id="main-container-team" ref={section3Ref}>
            <h1>Meet Our Team</h1>
        </div>
    )
}

export default Team;