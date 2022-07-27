import './Typography.example.css'

export const TypographyExample = () => {
  return (
    <div className="typography">
      <p className="text_type_main-large text_color_inactive">Серый текст</p>
      <p className="text_type_main-medium text_color_primary">Белый текст</p>
      <p className="text_type_main-default text_color_accent">Синий текст</p>
      <p className="text_type_main-small text_color_error">Красный текст</p>
      <p className="text_type_digits-large text_color_success">123</p>
      <p className="text_type_digits-medium text_color_accent">465</p>
      <p className="text_type_digits-default text_color_inactive">789</p>
    </div>
  )
}
