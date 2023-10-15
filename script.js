const apiKey = 'dbd438bb11184854a9d0d766055c39bd';
const newsContainer = document.getElementById('news-container');

async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.status === 'ok') {
            const articles = data.articles;

            articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description || 'Descrição não disponível'}</p>
                    <a href="${article.url}" target="_blank">Leia mais</a>
                `;
                newsContainer.appendChild(newsItem);
            });
        } else {
            console.error('Erro ao buscar notícias: ', data.message);
        }
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}

getNews();
