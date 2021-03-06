import { Article } from './js/Article.js'
import { ArticleModal } from './js/ArticleModal.js'
import { Modal } from './js/Modal.js'

const data = [
  {
    id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/1.jpg',
    tags: ['Art', 'Design'],
    content: 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).',
    date: '01.01.2020'
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/2.jpg',
    tags: ['Culture'],
    content: 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).',
    date: '01.01.2020'
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/3.jpg',
    tags: ['Art', 'Design', 'Culture'],
    content: 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).',
    date: '01.01.2020'
  },
  {
    id: 4,
    title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
    urlToImage: './src/img/strategies/4.jpg',
    tags: ['Art', 'Design', 'Culture'],
    content: 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).',
    date: '01.01.2020'
  },
  {
    id: 5,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/5.jpg',
    tags: ['Design'],
    content: 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).',
    date: '01.01.2020'
  },
]


window.onload = function () {

  //Render Articles
  if (data) {
    renderArticlesToDom()
  }

  //Tags
  addTagsClickHandler();

  //Generate Base Modal from Modal Class
  addToolsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (event) => {
    if (event.target.classList.contains('tag')) {
      let clickedTarget = event.target;
      removeSelectedTags();
      addSelectToTag(clickedTarget);
      if (clickedTarget.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategiesBySelectedTag(clickedTarget.innerText)
      }
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach((tag) => {
    tag.classList.remove('tag--selected');
    tag.classList.add('tag--bordered');
  })
}

const addSelectToTag = (tag) => {
  tag.classList.add('tag--selected');
  tag.classList.remove('tag--bordered');
}

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.remove('strategy--hidden');
  })
}

const filterStrategiesBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.add('strategy--hidden');
    strategy.querySelectorAll('.tag').forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy--hidden');
      }
    })
  })
}

const renderArticlesToDom = () => {
  const strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach((article) => {
    strategiesWrapper.append(article.generateArticle());
  })

  addStrategyClickHandler();
}

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
}

const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
}

const addToolsClickHandler = () => {
  document.querySelector('.tools__button .button').addEventListener('click', () => {
    generateToolsModal();
  })
}

const generateToolsModal = () => {
  renderModalWindow('Test content for tools modal');
}

const renderModalWindow = (content) => {
  let modal = new Modal('tools-modal');
  modal.buildModal(content);
}

const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', (event) => {
    if (event.target.closest('.strategy')) {
      let clickedStrategyId = event.target.closest('.strategy').getAttribute('data-id');
      let clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
  })
}

const getClickedData = (id) => {
  return data.find(article => article.id == id)
}

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal('article-modal', article);
  modal.renderModal();
}
