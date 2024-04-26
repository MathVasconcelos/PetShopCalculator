import React ,{useState, useEffect} from 'react';
import './App.css';

function App() {

  const[quantidadeCaesPequenos, setquantidadeCaesPequenos] = useState(0);
  const[quantidadeCaesGrandes, setquantidadeCaesGrandes] = useState(0);
  const[resultado, setResultado] = useState(0);
  const[opcao, setOpcao] = useState('CustoMeuCaninoFeliz:');

  function calcularCustoTotal () {
  if(opcao == "CustoMeuCaninoFeliz // Dias de semana")
    // Dias de semana
  return parseFloat( quantidadeCaesPequenos * 20.0) + parseFloat(quantidadeCaesGrandes * 40.0);
  else if(opcao == "CustoMeuCaninoFeliz // Finais de semana")
    // Finais de semana (aumento de 20%)
  return parseFloat( quantidadeCaesPequenos * (20.0 * 1.2) ) + parseFloat(quantidadeCaesGrandes * (40.0 * 1.2));
  
  else if(opcao == "CustoVaiRex // Dias de semana")
    // CustoVaiRex // Dias de semana
  return parseFloat( quantidadeCaesPequenos * (15.00) ) + parseFloat(quantidadeCaesGrandes * (50.0) );
  else if(opcao == "CustoVaiRex // Finais de semana")
    // CustoVaiRex // Finais de semana
  return parseFloat( quantidadeCaesPequenos * (15.0 + 5) ) + parseFloat(quantidadeCaesGrandes * (55.0 + 5.0) );

  else
    // Todos os dias
  return parseFloat( quantidadeCaesPequenos * 30.0) + parseFloat(quantidadeCaesGrandes * 45.0);
  }

  useEffect(() =>{
    setResultado(calcularCustoTotal());
  }, [quantidadeCaesPequenos,quantidadeCaesGrandes,opcao]);

  return (
    <div className="App">
      <h1>Calculadora PetShop</h1>

      <label>Quantidade Caes Pequenos</label>
      <input 
      type='number'
      value={(quantidadeCaesPequenos)}
      onChange={(e)=> setquantidadeCaesPequenos(e.target.value)} />

      <label>Quantidade Caes Grandes</label>
      <input 
      type='number'
      value={(quantidadeCaesGrandes)}
      onChange={(e)=> setquantidadeCaesGrandes(e.target.value)} />

      <select onChange={(e)=> setOpcao(e.target.value)} >
        <option>CustoMeuCaninoFeliz // Dias de semana</option>
        <option>CustoMeuCaninoFeliz // Finais de semana</option>
        <option>CustoVaiRex // Dias de semana</option>
        <option>CustoVaiRex // Finais de semana</option>
        <option>CustoChowChawgas // Todos os dias</option>
      </select>

      <label>Resultado {resultado}</label>

    </div>
  );
}

export default App;


