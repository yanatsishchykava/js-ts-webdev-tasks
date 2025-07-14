import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export const renderInHtml = async (
  template: () => string | Promise<string>,
  renderId: string,
  controller?: () => void
): Promise<void> => {
  const container: HTMLElement = document.getElementById(renderId)!;

  const header = Header();
  const footer = Footer();

  container.innerHTML = await template();

  container.prepend(header);
  container.append(footer);


  if (typeof controller === 'function') {
    controller();
  }
};
