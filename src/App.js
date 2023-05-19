import './App.css';
import Layout from './Layouts/Layout';
import FileManager from './Pages/FileManager/FileManager';

function App() {
  return (
    <div className="App">
    <Layout>
      <FileManager/>
    </Layout>
    </div>
  );
}

export default App;
