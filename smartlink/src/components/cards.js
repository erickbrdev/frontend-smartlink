import '../css/Card.css'

export default function Cards(props) {
  return (
    <section className="flex items-center justify-center gap-5">
      <div class="card">
        <div class="card-img">
          <img
            className='rounded-xl'
            src={props.image}
            alt='Acesso ao app e Web'
          />
        </div>
        <div class="card-info">
          <p class="text-body">{props.title}</p>
          <p class="text-title">{props.content}</p>
        </div>
      </div>
    </section>   
  )
}