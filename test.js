import test from 'ava';
import m from './index';

test('default', t => {
	t.true(m.all.length > 0);
	t.truthy(m.random());
	t.not(m.random(), m.random());
	t.is(m.all[0], 'http://i.giphy.com/l41lI4bYmcsPJX9Go.gif');
	t.is(m.all[1], 'http://i.giphy.com/2s0ouek7HJmWQ.gif');
});
