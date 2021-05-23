import { dividirAction, resetAction, incrementadorAction, decrementadorAction, multiplicarAction } from './contador/contador.action';
import { contadorReducer } from './contador/contador.reducer';

// Usar el reducer
console.log(contadorReducer(10, incrementadorAction));
console.log(contadorReducer(10, decrementadorAction));
console.log(contadorReducer(10, multiplicarAction));
console.log(contadorReducer(10, dividirAction));
console.log(contadorReducer(10, resetAction));