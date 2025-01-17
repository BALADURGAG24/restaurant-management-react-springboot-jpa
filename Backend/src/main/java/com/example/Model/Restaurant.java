package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="res")
public class Restaurant {
	
	@Id
	@GeneratedValue
	
	private int id;
	private String foodname;
	private float cost;
	private float gst;
	private float total;
	
	public  Restaurant()
	{
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFoodname() {
		return foodname;
	}

	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}

	public float getCost() {
		return cost;
	}

	public void setCost(float cost) {
		this.cost = cost;
	}

	public float getGst() {
		return gst;
	}

	public void setGst(float gst) {
		this.gst = gst;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public Restaurant(int id, String foodname, float cost, float gst, float total) {
		super();
		this.id = id;
		this.foodname = foodname;
		this.cost = cost;
		this.gst = gst;
		this.total = total;
	}

	@Override
	public String toString() {
		return "Restaurant [id=" + id + ", foodname=" + foodname + ", cost=" + cost + ", gst=" + gst + ", total="
				+ total + "]";
	}
	

}
