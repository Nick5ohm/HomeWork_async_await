import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Успешно загружено (async/await):', saving);
  } catch (error) {
    console.error('Ошибка при загрузке (async/await):', error);
  }
})();
