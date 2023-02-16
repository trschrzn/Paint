const toolbox = document.querySelectorAll(".toolbox input");

const createTooltip = (e) => {
  const tooltipParent = e.target;
  const tooltipText = e.target.dataset.tooltip;
  const tooltipPosition = e.target.dataset.tooltipPosition;

  const newTooltip = document.createElement("span");
  newTooltip.innerHTML = tooltipText;
  newTooltip.className = `tooltip ${tooltipPosition || "top"}`;

  tooltipParent.appendChild(newTooltip);
};

const removeTooltip = (e) => {
  const tooltip = e.target.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
};

toolbox.forEach((box) => box.addEventListener("mouseover", createTooltip));
toolbox.forEach((box) => box.addEventListener("mouseleave", removeTooltip));