import { Button } from "@/components/atoms/Button/Button";
import { ROUTES } from "@/app/routes";

export function HeaderLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Button
        label="Kitchen"
        variant="ghost-light"
        href={ROUTES.placeholder.route}
        className="max-tablet:justify-start"
        onClick={onClick}
      />
      <Button
        label="Home Security"
        variant="ghost-light"
        href={ROUTES.placeholder.route}
        className="max-tablet:justify-start"
        onClick={onClick}
      />
      <Button
        label="Hair Care"
        variant="ghost-light"
        href={ROUTES.placeholder.route}
        className="max-tablet:justify-start"
        onClick={onClick}
      />
      <Button
        label="Accessories"
        variant="ghost-light"
        href={ROUTES.placeholder.route}
        className="max-tablet:justify-start"
        onClick={onClick}
      />
      <Button
        label="Where to buy"
        variant="primary"
        href={ROUTES.placeholder.route}
        onClick={onClick}
      />
    </>
  );
}
