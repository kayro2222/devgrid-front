import api from 'services/api';

test('if services api is up', async () => {
  const result = await api.get('/weather/natal');

  expect(+result.status === 202 || +result.status === 200).toBeTruthy();
});
