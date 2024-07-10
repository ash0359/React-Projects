import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectState(prevState =>{
      const taskId = Math.random();
      const newTask = {
        text:text,
        peojectId: prevState.selectedProjectId,
        id: taskId,
      };

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    })
  }

  function handleDeleteTask(id){
    setProjectState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id)
  {
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const projectId = Math.random();
      const NewProject = {
        ...projectData,
        id: projectId
      };

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, NewProject]
      };
    })
  }

  function handleDelete(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDelete}
   onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>

  if(projectsState.selectedProjectId === null)
  {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} 
      onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
