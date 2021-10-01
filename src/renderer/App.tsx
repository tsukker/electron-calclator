import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import './App.global.css';

const BMICalculator = () => {
  const [heightCm, setHeightCm] = useState('' as string);
  const [weightKg, setWeightKg] = useState('' as string);
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="input-height-cm">身長(cm)</InputGroup.Text>
        <FormControl
          placeholder="身長(cm)"
          aria-describedby="input-height-cm"
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="input-weight-kg">体重(kg)</InputGroup.Text>
        <FormControl
          placeholder="体重(kg)"
          aria-describedby="input-weight-kg"
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(e.target.value)}
        />
      </InputGroup>
      <br />
      <div>
        {'BMI : '}
        {(() => {
          const numHeightCm = Number(heightCm);
          const numWeightKg = Number(weightKg);
          if (
            Number.isNaN(numHeightCm) ||
            Number.isNaN(numWeightKg) ||
            numHeightCm <= 0 ||
            numWeightKg <= 0
          ) {
            return '-----';
          }
          const bmi = (numWeightKg * 10000) / (numHeightCm * numHeightCm);
          return bmi.toFixed(2);
        })()}
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BMICalculator} />
      </Switch>
    </Router>
  );
}
