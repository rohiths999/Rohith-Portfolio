import ghpages from 'gh-pages'

ghpages.publish('dist', (err) => {
  if (err) {
    console.error('Deployment failed:', err)
    process.exit(1)
  } else {
    console.log('Successfully deployed to GitHub Pages!')
  }
})