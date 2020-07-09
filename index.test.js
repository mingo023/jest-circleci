const { fetchData } = require('./utils/fetchData');
const mockFnc = jest.fn(() => 32);
describe('Demo test', () => {
	test('Run some tests', async () => {
		const res = await fetchData();
		mockFnc(2);
		expect(mockFnc.mock.calls).toEqual([[2]]);
		expect(res.status).toBe(200);
	});
});
