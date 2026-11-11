import {expect,it} from 'vitest';
import {BASE_BANK} from '../src/model';
for(const q of BASE_BANK.filter(q=>q.calculation))it(`independent inverse/unit/choice verification ${q.id}`,()=>{
 const c=q.calculation!;const [a,b,d]=c.values;const chosen=Number(q.choices[q.answer-1].split(' ')[0]);
 expect(new Set(q.choices).size).toBe(4);expect(chosen).toBeCloseTo(c.result,8);
 if(c.kind==='scale')expect(chosen/d).toBeCloseTo(a/b,8);
 if(c.kind==='yield'||c.kind==='concentration')expect(chosen/a*100).toBeCloseTo(b,8);
 if(c.kind==='cost')expect(chosen/b).toBe(a);
 expect(q.year).toBeNull();expect(q.type).toBe('original');
});
