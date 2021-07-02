window.onload = function () {
  console.log("Hello World!");

  //Tags
  addTagsClickHandler();
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
