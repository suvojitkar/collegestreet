import Button from '@mui/material/Button'

const CSButton = (props: any) => {
  const {style, label, icon, size, variant, onClickHandler} = props;
  return <Button size={size} variant={variant} style={style} onClick={onClickHandler}>{label}</Button>
}

export default CSButton
