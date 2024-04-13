import classes from './StyleBreacrumb.module.css';
const Breacrumb = () => {
  return (
    <div className={classes.container}>
      {/* FEEDBACK: Tecnicamente esto no es un `title`, ojo con el naming de las clases */}
      <h5 className={classes.title}>INICIO / PROTEÍNAS / WHEY PROTEIN</h5>
    </div>
  );
};
export default Breacrumb;
