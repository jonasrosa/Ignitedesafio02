import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api';
import './styles/global.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/>
     <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}