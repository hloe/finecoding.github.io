// Create menu
// Small menu
let smallMenuArr = [
  {
  name: 'delivery',
  url: '#'
  },
  {
  name: 'faq',
  url: '#'
  },
  {
  name: 'help',
  url: '#'
  } 
];

let ListItem = React.createClass({
  render: function() {
    let name = this.props.data.name,
        url = this.props.data.url;
    
    return (
      <a href={url} className="link link__small">{name}</a>
    )
  }
});

let List = React.createClass({
  render: function() {
    let data = this.props.data,
        smallMenuItememplate = '';
    
    if (data.length > 0) {
      smallMenuItememplate = data.map(function(item, index) {
        return (
          <li key={index} className="small-menu__item">
          <ListItem data={item} />
          </li>
        )
      })
    } 
 
   return (
     <ul className="small-menu__list">
     {smallMenuItememplate}
     </ul>

   );
  }
});

let formArr = [
  {
    name: 'currency',
    values: ['dollars', 'euros']
  },
  {
    name: 'language',
    values: ['en', 'de', 'fr', 'es']
  }
];

let Options = React.createClass({
  render:function() {
    let values = this.props.data.values,
        options = '';
    
    if (values.length > 0) {
      options = values.map(function(item, index) {
        return (
          <option key={index} value={item}>{item}</option>
        )
      })
    }
    
    return (
    {options}
    )
  }
});

let Label = React.createClass({
  render: function() {
    let name = this.props.data.name,
        values = this.props.data.values;
    console.log(values);
    
    return (
      <label className="label">
        <select className="select" name={name}>
        <Options data={values} />
        </select>
      </label>
    )
  }
});

let formTemplate = React.createClass({    
  render: function () {
    let data = this.props.data,        
        formItemTemplate = '';
    
    if (data.length > 0) {
      formItemTemplate = data.map(function(item, index) {
        return (
          <li key={index} className="form__item">
          <Label data={item} />
          </li>
        )
      })
    } 
    
    return (
      {formItemTemplate}
    )
  }
});

let Form = React.createClass({
  render: function () {
    return (
      <form action="#" className="form">
      <ul className="form__list">
      {formTemplate}
      </ul>
      </form>
    )
  }
});

let SmallMenu = React.createClass({
  render: function() {
    return (
      <div className="small-menu">
        <div className={ 'container ' + 'container__centered ' + 'container__small-menu' }>
        <List data={smallMenuArr} />
        <Form data={formArr} />
        </div>
      </div>
    );
  }
});

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <SmallMenu />
      </div>
    );
  }
});

// Nav

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);