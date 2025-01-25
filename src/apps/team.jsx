import "../styles/team.css" 

// import { ReactComponent as Empty_Folder } from "../assets/folder-without-files.svg";
// import { ReactComponent as Full_Folder } from "../assets/folder-with-files.svg";
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

function Pictures(){
  return(
    <>
      <div className="team-image"><img loading="eager" src="/headshots/1.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/2.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/3.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/4.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/5.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/6.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/7.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/8.JPEG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/9.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/10.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/11.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/12.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/13.JPEG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/14.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/15.JPG"/></div>
      <div className="team-image"><img loading="eager" src="/headshots/16.JPG"/></div>
    </>
  )
}

function Team({section3Ref}){
  return(
    <div id="main-container-team" ref={section3Ref}>
      <h1>Meet Our Team</h1>
      <div id="scroll-window">
        <div id="inner-scroll-window">
          <Pictures/>
          <Pictures/>
          <Pictures/>
        </div>
      </div>
    </div>
  )
}

export default Team;  