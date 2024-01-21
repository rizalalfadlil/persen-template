import React, { useState} from 'react';
import { Input, Progress, Image, Tooltip, Button } from 'antd';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  LoadingOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';

const App = () => {
  const [nama, setNama] = useState('');
  const [teksNama, setTeksNama] = useState(nama);
  const [hasil, setHasil] = useState(null);
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teksHasil, setTeksHasil] = useState('teks');
  const [image, setImage] = useState();

  const twoColors = {
    '100%': '#FF8076',
    '0%': '#FFEA76',
  };
  const determineCategory = (percentage, categories) => {
    const fixedPercentage = percentage === 0? 1 : percentage;
    const categoryIndex = Math.floor((100 - fixedPercentage) / (100 / categories.length));
    return categories[categoryIndex];
  };

    const hitungKesepuhan = () => {
      setLoading(true);
      setTeksNama(nama);
      const hash = (str) => {
        let hashValue = 0;
        if (str.length === 0) return hashValue;
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hashValue = (hashValue << 5) - hashValue + char;
          hashValue = hashValue & hashValue;
        }
        return Math.abs(hashValue % 101);
      };
      
      const persentasesepuh = hash(nama);
      setHasil(persentasesepuh);

      const categories = [
        { label: 'sepuh', image: 'sepuh.jpeg', color: 'danger' },
        { label: 'kroco', image: 'kroco.jpeg', color: 'warning' },
        

      ];
    
      const category = determineCategory(persentasesepuh, categories);
      setTeksHasil(category.label);
      setImage(category.image);
      setColor(category.color);
      
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

  return (
    <div className="App bg-secondary bg-opacity-25">
      <div className='p-2 d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
      <div className='border p-5 container bg-light rounded'>
      <h1 className='fw-bold'>Seberapa sepuh kamu</h1>
      <div className='row'>
      <Input
        placeholder="Tulis Nama"
        value={nama}
        className='rounded-pill'
        onChange={(e) => setNama(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Button type='primary'  disabled={nama ===''} className='rounded-pill text-bg-warning' onClick={hitungKesepuhan}>Hitung</Button>
      </div>
      <div className='mt-3'>
      {loading ? (
        <LoadingOutlined style={{scale:'2', color:'#4A95FF'}}/>
      ) : (
        (hasil !== null) && (
          <>
          <Progress percent={hasil} className="rounded-0" size={['default', 30]} format={(percent) => percent} strokeColor={twoColors}/>
          <div className='row fw-bold mt-2 '>
            <span className='col text-start text-warning'>kroco</span>
            <span className='col text-end text-warning'>sepuh</span>
          </div>
          <h5 className='text-uppercase'>{teksNama} {hasil}%, Kamu...</h5>
          <h1 className={`text-${color} fw-bold`}>{teksHasil}</h1>
          <Image src={image} preview={false} width={200} style={{maxHeight:'250px'}}/>
          <p className='text-end w-100'><Tooltip title='hanya untuk candaan dan bukan beneran'><InfoCircleOutlined/></Tooltip></p>
          </>
        )
      )}

      </div>
      </div>
      </div>
    </div>
  );
};

export default App;