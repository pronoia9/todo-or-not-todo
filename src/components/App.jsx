import Banner from './Banner/Banner';
import ThemeButton from './ThemeButton/ThemeButton';
import TodoList from './TodoList/TodoList';
import './App.scss';

export default function App() {
  return (
    <>
      <Banner />
      <main className='main'>
        <div className='main__header'>
          <h1 className='heading'>TODO</h1>
          <ThemeButton />
        </div>
        <TodoList />
      </main>
    </>
  );
}