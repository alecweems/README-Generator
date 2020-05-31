function generateMarkdown(data) {
    return `
  # ${data.username}
  # ${data.userEmail}
  # ${data.title}
  # ${data.description}
  # ${data.install}
  # ${data.tableOfContents}
  # ${data.usage}
  # ${data.contribution}
  # ${data.tests}
  # ${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;