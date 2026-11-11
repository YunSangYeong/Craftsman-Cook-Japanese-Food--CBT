import {describe,it,expect} from 'vitest';
import {BASE_BANK,createExam,grade,emptyStore,answerExam,submitExam,remainingSeconds,STORAGE_KEY,validateQuestion,fingerprint} from '../src/model';
describe('Japanese cooking study bank',()=>{
 it('contains 1000 unique authored reviewed items without fabricated provenance',()=>{expect(BASE_BANK).toHaveLength(1000);expect(new Set(BASE_BANK.map(q=>q.id)).size).toBe(1000);expect(new Set(BASE_BANK.map(q=>fingerprint(q))).size).toBe(1000); for(const q of BASE_BANK){expect(q.type).toBe('original');expect(q.year).toBeNull();expect(q.session).toBeNull();expect(q.choices).toHaveLength(4);expect(q.choices[q.answer-1]).toBeTruthy();}});
 it('samples one integrated subject, no duplicate IDs, absolute deadline',()=>{const e=createExam(BASE_BANK,'main',100);expect(e.questions).toHaveLength(60);expect(new Set(e.questions.map(q=>q.id)).size).toBe(60);expect(e.deadline).toBe(3600100)});
 it.each([35,36])('grades boundary %i of 60',(n)=>{const e=createExam(BASE_BANK,'main');e.questions.slice(0,n).forEach(q=>e.answers[q.id]=q.answer);expect(grade(e).passed).toBe(n>=36);expect(grade(e).unanswered).toBe(60-n)});
 it('blocks expired answers and submits once',()=>{const s={...emptyStore(),exam:createExam(BASE_BANK,'main',0)};const r=answerExam(s,s.exam.questions[0].id,1,3600000);expect(r.exam).toBeNull();expect(r.results).toHaveLength(1);expect(submitExam(r).results).toHaveLength(1)});
 it('counts remaining time and isolates local storage',()=>{expect(remainingSeconds(1000,1001)).toBe(0);expect(STORAGE_KEY).toBe('Craftsman-Cook-Japanese-Food--CBT:v1')});
});
it('validates every registered schema and provenance field',()=>{for(const q of BASE_BANK)expect(validateQuestion(q).id).toBe(q.id)});
