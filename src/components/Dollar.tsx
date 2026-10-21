import { useState } from 'react';
import { dollar } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

const nf = new Intl.NumberFormat('es-CU', { maximumFractionDigits: 0 });

export function Dollar() {
  const [rate, setRate] = useState(600);
  const [price, setPrice] = useState(10);
  const total = Math.max(0, rate) * Math.max(0, price);

  return (
    <section className="dollar" id="dolar">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2">
            <Lines lines={dollar.title} />
          </Reveal>
          <Reveal as="p" className="section-head__lead">
            {dollar.lead}
          </Reveal>
        </div>

        <div className="dollar__grid">
          <ul className="dollar__list">
            {dollar.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.05}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="calc" delay={0.1}>
            <h3>{dollar.calculator.title}</h3>
            <p className="calc__intro">{dollar.calculator.text}</p>

            <div className="calc__fields">
              <label className="calc__field">
                <span>{dollar.calculator.rateLabel}</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={5}
                  value={rate}
                  onChange={(event) => setRate(Number(event.target.value) || 0)}
                />
              </label>

              <label className="calc__field">
                <span>{dollar.calculator.priceLabel}</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={1}
                  value={price}
                  onChange={(event) => setPrice(Number(event.target.value) || 0)}
                />
              </label>
            </div>

            <div className="calc__result" aria-live="polite">
              <span>{dollar.calculator.resultLabel}</span>
              <strong>{nf.format(total)} CUP</strong>
            </div>

            <p className="calc__note">{dollar.calculator.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
