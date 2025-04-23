.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 10px; /* Thêm padding cho đẹp */
}

.button {
  position: relative;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #707070;
  text-align: left;
  transition: all 0.2s ease-in-out;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.44);
  border-color: rgba(128, 128, 128, 0.44);
}

.button:hover {
  border-color: rgba(34, 197, 94, 0.31);
  background-color: rgba(0, 100, 0, 0.12);
  transform: scale(1.02);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button:active {
  transform: scale(0.98);
}

.button-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.icon-container {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.31);
  color: #707070;
}

.icon-svg {
  width: 20px;
  height: 20px;
}

.text-container {
  flex-grow: 1;
}

.button-title {
  font-size: 16px;
  font-weight: medium;
  color: #D4D4D4;
}

.button-subtitle {
  font-size: 12px;
  color: #A3A3A3;
  margin-top: 4px;
}

.shard-info {
  font-size: 12px;
  font-weight: medium;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.shard-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.emerald {
  color: #86EFAC;
}

.amber {
  color: #FBBF24;
}

.blue {
  color: #60A5FA;
}

.gradient-button {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(to right, #0F766E, #38BDF8);
  color: #374151;
  box-shadow: 0 4px 6px rgba(15, 118, 110, 0.3);
  text-align: center;
  border: none;
  cursor: pointer;
}

.gradient-button:hover {
  background: linear-gradient(to right, #115E59, #22D3EE);
  box-shadow: 0 6px 8px rgba(15, 118, 110, 0.4);
}

.gradient-button:active {
  transform: scale(0.98);
}
