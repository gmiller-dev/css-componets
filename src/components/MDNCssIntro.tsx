import "../styles/mdnTutorials/mdnCssIntro.scss"
export function MDNCssIntro () {
  return (
    <>
      <h1>I am a level one heading</h1>

      <p>
        This is a paragraph of text.
        In the text is a <span>span element</span>
        and also a <a href="http://example.com">link</a>.
      </p>

      <p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

      <ul>
          <li><span> Item one </span></li>
          <li className="special">Item two</li>
          <li>Item <em>three</em></li>
      </ul>
    </>
  )
}